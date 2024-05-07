import ReactModal from "react-modal";
const ImageModal = () => {
  return (
    <ReactModal
      isOpen={false}
      style={{
        overlay: {},
        content: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      contentLabel={"Example Modal"}
      id={"some-id"}
      ariaHideApp={false}
      shouldFocusAfterRender={true}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      shouldReturnFocusAfterClose={true}
      preventScroll={false}
      aria={{
        labelledby: "heading",
        describedby: "full_description",
      }}
      data={{ background: "green" }}
      overlayElement={(props, contentElement) => (
        <div {...props}>{contentElement}</div>
      )}
      contentElement={(props, children) => <div {...props}>{children}</div>}
    >
      <p>Modal Content</p>
    </ReactModal>
  );
};
export default ImageModal;
