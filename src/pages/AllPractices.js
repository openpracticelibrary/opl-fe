import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_PRACTICES_BY_TAG_PAGINATION } from "../graphql";
import PracticeCardGrid from "../components/shared/PracticeCards/PracticeCardGrid";
import Practices from "../components/allPractices";
import ComponentLoading from "../components/shared/QueryState/ComponentLoading";
import QueryError from "../components/shared/QueryState/QueryError";
import {
  filterTags,
  mobiusLoopArray,
  popularMenuItems,
} from "../utilities/dropDownValues";


const paginationLimit = 12;

const PracticesWithData = (props) => {
  const [selectedFilterTag, setFilterTag] = React.useState(filterTags[0]);
  const [page, setPage] = React.useState(16);
  const [keywordSearchToggle, setKeywordSearchToggle] = React.useState(false);
  const [
    selectedMobiusLoopFilter,
    setSelectedMobiusLoopFilter,
  ] = React.useState(mobiusLoopArray[0]);
  const [selectedPopularFilter, setPopularFilterTitle] = React.useState(
    Object.keys(popularMenuItems)[0]
  );

  const tagArray = [
    ...(selectedFilterTag !== "ALL" ? [selectedFilterTag.toLowerCase()] : []),
    ...(selectedMobiusLoopFilter !== "Entire Process Model"
      ? [selectedMobiusLoopFilter.toLowerCase()]
      : []),
  ];

  const handlePopularFilterChange = (item) => {
    setPopularFilterTitle(item);
    refetch({
      variables: {
        start: 0,
        limit: paginationLimit,
        tag: tagArray,
        sort: popularMenuItems[item],
      },
    });
    setPage(paginationLimit);
  };

  const toggleKeywordSearch = () =>
    setKeywordSearchToggle(!keywordSearchToggle);

  const changeFilterTag = (tag) => {
    setFilterTag(tag);
    const tagArray = [
      ...(tag !== "ALL" ? [tag.toLowerCase()] : []),
      ...(selectedMobiusLoopFilter !== "Entire Process Model"
        ? [selectedMobiusLoopFilter.toLowerCase()]
        : []),
    ];
    refetch({
      variables: {
        start: 0,
        limit: paginationLimit,
        sort: popularMenuItems[selectedPopularFilter],
        tag: tagArray,
      },
    });
    setPage(paginationLimit);
  };

  const handleMobiusLoopSelect = (event) => {
    setSelectedMobiusLoopFilter(event.target.value);
    const tagArray = [
      ...(selectedFilterTag !== "ALL" ? [selectedFilterTag.toLowerCase()] : []),
      ...(event.target.value !== "Entire Process Model"
        ? [event.target.value.toLowerCase()]
        : []),
    ];
    refetch({
      variables: {
        start: 0,
        limit: paginationLimit,
        tag: tagArray,
        sort: popularMenuItems[selectedPopularFilter],
      },
    });
    setPage(paginationLimit);
  };

  const dataProps = {
    selectedPopularFilter,
    popularMenuItems,
    filterTags,
    selectedFilterTag,
    keywordSearchToggle,
    mobiusLoopArray,
    selectedMobiusLoopFilter,
    handlePopularFilterChange,
    toggleKeywordSearch,
    changeFilterTag,
    handleMobiusLoopSelect,
  };

  const { loading, error, data, refetch, networkStatus, fetchMore } = useQuery(
    GET_PRACTICES_BY_TAG_PAGINATION,
    {
      variables: {
        start: 0,
        limit: paginationLimit,
        tag: tagArray,
        sort: popularMenuItems[selectedPopularFilter],
      },
      fetchPolicy: "cache-and-network",
      notifyOnNetworkStatusChange: true,
    }
  );

  const onLoadMore = (page) => {
    const newPage = page + paginationLimit;
    fetchMore({
      variables: {
        start: newPage,
        tag: tagArray,
        sort: popularMenuItems[selectedPopularFilter],
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          practices: [...prev.practices, ...fetchMoreResult.practices],
        });
      },
    });
    setPage(newPage);
  };

  if (error) return <QueryError err={error} />;

  return (
    <Practices {...props} {...dataProps}>
      { (loading && !data) || (networkStatus === 4) ? <ComponentLoading /> :
        <PracticeCardGrid
          loading={loading}
          practices={data.practices}
          page={page}
          onLoadMore={onLoadMore}
        />}
    </Practices>
  );
};

export default PracticesWithData;
