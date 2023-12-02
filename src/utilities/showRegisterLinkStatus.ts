export const showRegisterLinkStatus = (
  isShowRegisterLink: boolean,
  activeTab: string,
  searchClientsLength: number
): boolean => {
  if (isShowRegisterLink && activeTab === "nrc" && searchClientsLength === 0)
    return true;
  if (isShowRegisterLink && activeTab === "nupn" && searchClientsLength === 0)
    return true;
  if (isShowRegisterLink && activeTab === "cellPhone") return true;
  if (isShowRegisterLink && activeTab === "name") return true;
  return false;
};
