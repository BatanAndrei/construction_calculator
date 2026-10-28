import { ROOF_WORKS } from "../../constants/works";
import WorksSelectPage from "../../components/WorksSelectPage/WorksSelectPage";

const RoofPage = () => {
  return (
    <WorksSelectPage
      title="Крыша"
      subtitle="Выберите работы"
      works={ROOF_WORKS}
      backTo="/"
      nextTo="/work/krysha/calc"
    />
  );
};

export default RoofPage;
