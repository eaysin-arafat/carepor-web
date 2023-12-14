export const bloodPressureStatus = (systolic: number, diastolic: number) => {
  const msg =
    systolic >= 130 || diastolic > 80
      ? "High Blood Pressure"
      : systolic <= 120 || diastolic <= 80
      ? "Normal"
      : (systolic >= 120 && systolic <= 129) || diastolic < 80
      ? "Elevated"
      : "";

  return msg;
};
