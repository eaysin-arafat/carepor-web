import { TypeFacilityAccess } from "@/types/facility";
import { OnchangeEventType } from "@/types/htmlEvents";
import { useState } from "react";

const useRequestSearch = (requests: TypeFacilityAccess[]) => {
  const [search, setSearch] = useState("");

  const filterHandler = (data: TypeFacilityAccess) => {
    let user = data?.userAccount;
    let filter = search.toLowerCase();
    if (
      user.cellphone.toLowerCase().includes(filter) ||
      user.firstName.toLowerCase().includes(filter) ||
      user.surname.toLowerCase().includes(filter)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSearchChange = (e: OnchangeEventType) => {
    setSearch(e.target.value);
  };

  const filteredRequests =
    (Array.isArray(requests) && requests.filter(filterHandler)) || [];
  return {
    handleSearchChange,
    filteredRequests,
    search,
  };
};

export default useRequestSearch;
