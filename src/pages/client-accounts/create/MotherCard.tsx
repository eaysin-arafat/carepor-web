import Card from "@/components/core/card/Card";
import DataRow from "@/components/core/table/DataRow";
import { EnumSex } from "@/enum/enumerators";
import { Client } from "@/interface/clients";
import { clientAddress } from "@/utilities";
import { cn } from "@/utilities/cn";
import { DateFunc } from "@/utilities/date";
type Props = {
  mother: Client;
  title?: string;
  disabled: boolean;
  handler: () => void;
  isLinked: boolean;
};

export default function MotherCard({
  mother,
  title,
  disabled,
  handler,
  isLinked,
}: Props) {
  return (
    <Card
      title={title || "Mother's Profile"}
      className="bg-whiteColor shadow-none border md:px-3"
      titleClass="text-secondaryColor pt-6"
    >
      <div className="md:grid md:grid-cols-2">
        <DataRow title="First Name" data={mother?.firstName} />
        <DataRow title="Surname" data={mother?.surname} />
        <DataRow title="Sex" data={EnumSex[mother?.sex]} />
        <DataRow
          title="Date of Birth"
          data={DateFunc.formatDate(mother?.dob)}
        />
        <DataRow title="NRC" data={mother?.nrc} />
        <DataRow title="NUPN" data={mother?.nupn} />

        <DataRow title="Address" data={mother && clientAddress(mother)} />
        <DataRow
          title="Profile Registration Date"
          data={DateFunc.formatDate(mother?.registrationDate)}
        />
      </div>
      {/*  */}
      {mother && (
        <div className="mt-3 flex justify-end w-full">
          {!isLinked && (
            <button
              onClick={handler}
              disabled={disabled}
              className={cn(buttonStyle, "bg-primaryColor text-white")}
            >
              Link
            </button>
          )}

          {isLinked && (
            <button
              onClick={handler}
              disabled={disabled}
              className={cn(
                buttonStyle,
                "bg-dangerColor hover:bg-red-600 text-whiteColor"
              )}
            >
              Unlink
            </button>
          )}
        </div>
      )}
    </Card>
  );
}

const buttonStyle =
  "px-3 md:px-6 py-2 text-md md:text-lg bg-whiteBgColor border border-borderColor hover:bg-borderColor rounded-full whitespace-nowrap";
