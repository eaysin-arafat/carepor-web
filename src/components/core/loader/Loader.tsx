const Loader = () => {
  return (
    <div
      className="flex items-center w-[100%] absolute top-0 justify-center h-screen"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        zIndex: 999999,
      }}
    >
      <div className="animate-spin rounded-full h-16 w-16  border-t-4 border-b-4" />
    </div>
  );
};

export default Loader;
