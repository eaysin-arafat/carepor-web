import { clientsTags } from "./clients-tags.js";
import { facilityTags } from "./facility-tags.js";
import { mainModuleTags } from "./modules-tags.js";
import { modulesTab } from "./tab-items-tags.js";
import { queuePagesTags } from "./queue-page-tags.js";
import { userTags } from "./user-accounts.js";

const apiTags = [
  ...userTags,
  ...mainModuleTags,
  ...modulesTab,
  ...facilityTags,
  ...clientsTags,
  ...queuePagesTags,
];

export default apiTags;
