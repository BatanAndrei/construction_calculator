import { TERRACE_WORKS } from "../../constants/works";
import WorksSelectPage from "../../components/WorksSelectPage/WorksSelectPage";

const TerracePage = () => {
  return (
    <WorksSelectPage
      title="Терасса"
      subtitle="Выберите работы"
      works={TERRACE_WORKS}
      backTo="/"
      nextTo="/work/terassa/calc"
    />
  );
};

export default TerracePage;
