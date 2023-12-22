import DataRow from "@/components/core/table/DataRow";
import { EnumSex } from "@/enum/enumerators";
import { Client } from "@/interface/clients";
import { clientAddress } from "@/utilities";
import { DateFunc } from "@/utilities/date";
type Props = {
  client: Client;
};

export default function ClientCard({ client }: Props) {
  return (
    <div className="md:grid md:grid-cols-2 bg-lightBlueColor px-5 py-3 rounded-lg">
      <h2 className="col-span-full  heading_2 text-2xl text-textColor  mb-2">
        Child's Profile
      </h2>
      <DataRow title="First Name" data={client?.firstName} />
      <DataRow title="Surname" data={client?.surname} />
      <DataRow title="Sex" data={EnumSex[client?.sex]} />
      <DataRow title="Date of Birth" data={DateFunc.formatDate(client?.dob)} />
      <DataRow title="NRC" data={client?.nrc} />
      <DataRow title="NUPN" data={client?.nupn} />

      <DataRow title="Address" data={client && clientAddress(client)} />
      <DataRow
        title="Profile Registration Date"
        data={DateFunc.formatDate(client?.registrationDate)}
      />
    </div>
  );
}


