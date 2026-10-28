import { FENCE_WORKS } from "../../constants/works";
import WorksSelectPage from "../../components/WorksSelectPage/WorksSelectPage";

const FencesPage = () => {
  return (
    <WorksSelectPage
      title="Забор"
      subtitle="Выберите работы"
      works={FENCE_WORKS}
      backTo="/"
      nextTo="/work/zabor/calc"
    />
  );
};

export default FencesPage;