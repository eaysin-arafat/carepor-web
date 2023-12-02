import { FaRegCircleCheck, FaRegCircleDot } from "react-icons/fa6";
import { PiFlagCheckeredFill } from "react-icons/pi";

type Props = {
  active: number;
  title: string[];
};
const MultiStepComponent: React.FC<Props> = ({
  active = 1,
  title = [],
}: Props) => {
  const removeFirst = title?.filter((_, i) => i !== 0);
  const middleData = removeFirst?.filter(
    (_, i) => i !== removeFirst?.length - 1
  );
  // const firstTitle = removeFirst[0];
  // const lastTitle = removeFirst[removeFirst.length - 1];
  const firstTitle = title[0];
  const lastTitle = title[title.length - 1];

  return (
    <div className="w-full">
      {/* //* Main HML */}
      <div
        className={`grid justify-between items-center mt-20 w-full`}
        style={{ gridTemplateColumns: `repeat(${title.length - 1}, 1fr) .3fr` }}
      >
        <div className="flex items-center gap-[2px] mr-[2px]">
          {active > 1 ? (
            <div className="relative flex justify-center ">
              <FaRegCircleCheck
                size={30}
                color={active >= 1 ? "var(--primary)" : "var(--grayColor)"}
              />
              <p
                className={`text-center absolute top-full left-auto right-auto ${
                  active >= 1 ? "font-medium" : ""
                } w-[200px] mt-2`}
                style={{
                  lineHeight: "15px",
                  fontSize: "11px",
                  color: active >= 1 ? "var(--primary)" : "var(--grayColor)",
                }}
                dangerouslySetInnerHTML={{ __html: firstTitle }}
              />
            </div>
          ) : (
            <div className="relative flex justify-center ">
              <FaRegCircleDot
                size={30}
                color={active >= 1 ? "var(--primary)" : "var(--grayColor)"}
              />
              <p
                className={`text-center absolute top-full left-auto right-auto ${
                  active >= 1 ? "font-medium" : ""
                } w-[200px] mt-2`}
                style={{
                  lineHeight: "15px",
                  fontSize: "11px",
                  color: active >= 1 ? "var(--primary)" : "var(--grayColor)",
                }}
                dangerouslySetInnerHTML={{ __html: firstTitle }}
              />
            </div>
          )}
          <div
            className={`h-[2px] w-[100%] ${
              active >= 2 ? "bg-primaryColor" : "bg-grayColor"
            }`}
          />
        </div>

        {middleData.map((item, e) => (
          <div key={e}>
            <div className="flex items-center gap-[2px] mr-[2px]">
              {active > e + 2 ? (
                <div className="relative flex justify-center ">
                  <FaRegCircleCheck
                    size={30}
                    color={
                      active >= e + 1 ? "var(--primary)" : "var(--grayColor)"
                    }
                  />
                  <p
                    className={`text-center absolute top-full left-auto right-auto ${
                      active >= e + 1 && "font-medium"
                    } w-[200px] mt-2`}
                    style={{
                      lineHeight: "15px",
                      fontSize: "11px",
                      color:
                        active >= e + 2 ? "var(--primary)" : "var(--grayColor)",
                    }}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </div>
              ) : (
                <div className="relative flex justify-center ">
                  <FaRegCircleDot
                    size={30}
                    color={
                      active >= e + 2 ? "var(--primary)" : "var(--grayColor)"
                    }
                  />
                  <p
                    className={`text-center absolute top-full left-auto right-auto ${
                      active >= e + 2 && "font-medium"
                    } w-[200px] mt-2`}
                    style={{
                      lineHeight: "15px",
                      fontSize: "11px",
                      color:
                        active >= e + 2 ? "var(--primary)" : "var(--grayColor)",
                    }}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </div>
              )}
              <div
                className={`h-[2px] w-[100%] ${
                  active >= e + 3 ? "bg-primaryColor" : "bg-grayColor"
                }`}
              />
            </div>
          </div>
        ))}

        <div className="flex justify-start">
          <div className="relative flex justify-center">
            <PiFlagCheckeredFill
              size={30}
              color={
                active >= title?.length ? "var(--primary)" : "var(--grayColor)"
              }
            />
            <p
              className={`text-center absolute top-full left-auto right-auto ${
                active >= title?.length ? "font-medium" : ""
              } w-[200px] mt-2`}
              style={{
                lineHeight: "15px",
                fontSize: "11px",
                color:
                  active >= title?.length
                    ? "var(--primary)"
                    : "var(--grayColor)",
              }}
              dangerouslySetInnerHTML={{ __html: lastTitle }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepComponent;
