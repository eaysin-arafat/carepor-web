import { clientsTags } from "./clients-tags";
import { facilityTags } from "./facility-tags";
import { mainModuleTags } from "./modules-tags";
import { modulesTab } from "./tab-items-tags";
import { queuePagesTags } from "./queue-page-tags";
import { userTags } from "./user-accounts";

const apiTags = [
  ...userTags,
  ...mainModuleTags,
  ...modulesTab,
  ...facilityTags,
  ...clientsTags,
  ...queuePagesTags,
];

export default apiTags;
