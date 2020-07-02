import React from "react";

function WebLinkIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "17"}
      height={props.height || "17"}
      viewBox="0 0 17 17"
    >
      <g fill={props.fill || "#2E2E2E"}>
        <path d="M15.099 8.79V12.748c0 .264.007.528-.027.79l.034-.252c-.036.254-.102.5-.201.737l.095-.226c-.099.23-.224.446-.376.644l.148-.192c-.152.196-.329.372-.524.524l.191-.148c-.2.152-.414.28-.644.376.076-.032.152-.065.226-.095-.235.099-.482.165-.737.201l.253-.034c-.397.052-.811.027-1.21.027H4.888c-.345 0-.691.002-1.035 0-.133 0-.264-.01-.395-.027l.253.034c-.255-.036-.5-.102-.737-.2L3.2 15c-.23-.099-.447-.224-.644-.376l.192.148c-.196-.152-.373-.328-.525-.524.05.064.1.127.148.192-.151-.2-.279-.414-.376-.644.033.076.065.152.095.226-.098-.236-.165-.483-.201-.737l.034.253c-.051-.397-.026-.811-.026-1.21v-2.272-2.788V4.89c0-.346-.002-.692 0-1.035 0-.133.01-.264.026-.395l-.034.252c.036-.254.103-.5.201-.737l-.095.226c.1-.23.225-.446.376-.644l-.148.192c.152-.195.329-.372.525-.524l-.192.148c.2-.152.414-.279.644-.376-.076.032-.152.065-.226.095.235-.099.482-.165.737-.201l-.253.034c.23-.03.462-.027.693-.027h4.056c.243 0 .5-.106.672-.277.166-.165.29-.435.278-.672-.012-.245-.091-.5-.278-.673C8.693.107 8.465 0 8.207 0H3.87c-.623 0-1.217.152-1.774.425C1.473.731.946 1.24.578 1.823c-.38.6-.575 1.322-.577 2.03-.002.267 0 .533 0 .8v8.492c.002.67.178 1.343.513 1.924.68 1.186 1.98 1.926 3.343 1.93.294.002.589 0 .883 0h8.206c.084 0 .17.002.253 0 .709-.013 1.436-.218 2.029-.611.575-.382 1.079-.91 1.373-1.54.255-.55.399-1.118.399-1.725v-1.69-2.244-.397c0-.243-.106-.5-.277-.672-.166-.166-.435-.289-.673-.278-.245.012-.5.092-.672.278-.171.184-.28.412-.28.67zM11.932 2h4.136c.238 0 .49-.112.66-.292.161-.174.282-.458.271-.708-.01-.258-.09-.526-.272-.708-.182-.18-.406-.292-.66-.292H11.933c-.238 0-.49.112-.66.292-.161.174-.282.458-.271.708.01.258.09.526.272.708.182.178.408.292.66.292z" />
        <path d="M17 5.068v-1.4-2.227-.509c0-.238-.112-.49-.292-.66C16.534.112 16.25-.01 16 .002c-.258.01-.526.09-.708.272-.18.182-.292.406-.292.66V5.067c0 .238.112.49.292.66.174.161.458.282.708.271.258-.01.526-.09.708-.272.178-.182.292-.408.292-.66z" />
        <path d="M9.547 8.735l.72-.72 1.714-1.713 2.073-2.073 1.797-1.797c.29-.29.585-.578.872-.871l.012-.013C16.9 1.383 17 1.14 17 .907c0-.223-.098-.488-.265-.642-.172-.157-.398-.275-.641-.264-.241.01-.467.092-.641.264l-.72.72-1.714 1.713-2.073 2.073L9.15 6.568c-.29.29-.585.578-.872.871l-.012.013C8.1 7.617 8 7.86 8 8.093c0 .223.098.488.265.642.172.157.398.275.641.264.241-.009.467-.09.641-.264z" />
      </g>
    </svg>
  );
}

export default WebLinkIcon;
