import Home from "./pages/Home";

// University
import RectorCongratulations from "./pages/University/RectorCongratulations";
import UniversityRegulations from "./pages/University/UniversityRegulations";
import RegulatoryDoc from "./pages/University/RegulatoryDocuments";
import HistoryUniversity from "./pages/University/History";
import Requisites from "./pages/University/Requisites";
import VirtualReception from "./pages/University/VirtualReception";
// News
import News from "./pages/News/List";
import NewsSingle from "./pages/News/Single";

// Structure
import Chairs from "./pages/Structure/Chairs";
import Faculties from "./pages/Structure/Faculties";
import TdtuStructure from "./pages/Structure/TdtuStructure";
import DigitalLearningTechnologiesCenter from "./pages/Structure/Centers/DigitalLearningTechnologiesCenter";
import IndustrialTrainingCenter from "./pages/Structure/Centers/IndustrialTrainingCenter";
import InformationCenter from "./pages/Structure/Centers/InformationCenter";
import JapanInnovationCenter from "./pages/Structure/Centers/JapanInnovationCenter";
import PersonalTrainingCenter from "./pages/Structure/Centers/PersonalTrainingCenter";
// import Rectorate from "./pages/Structure/Rectorate";

// sections
import AccountingSection from "./pages/Structure/Sections/AccountingSection";
import GiftedStudentsSection from "./pages/Structure/Sections/GiftedStudentsSection";
import HumanResourcesSection from "./pages/Structure/Sections/HumanResourcesSection";
import IndustrialEconomicsSection from "./pages/Structure/Sections/IndustrialEconomicsSection";
import InsideMonitoringSection from "./pages/Structure/Sections/InsideMonitoringSection";
import MasterSystem from "./pages/Structure/Sections/MasterSystem";
import MonitoringOfGraduatesSection from "./pages/Structure/Sections/MonitoringOfGraduatesSection";
import ResearchingSystemSection from "./pages/Structure/Sections/ResearchingSystemSection";
import ScienceSection from "./pages/Structure/Sections/ScienceSection";
import TeachingMethodologySection from "./pages/Structure/Sections/TeachingMethodologySection";
import YouthUnionDepartmentSection from "./pages/Structure/Sections/YouthUnionDepartmentSection";
// Branches
import OlmaliqBranch from "./pages/Structure/Branches/OlmaliqBranch";
import QoqonBranch from "./pages/Structure/Branches/QoqonBranch";
import TermizBranch from "./pages/Structure/Branches/TermizBranch";

// Activity
import FinancialActivity from "./pages/Activity/FinancialActivity";
import CulturalAndEnlightenment from "./pages/Activity/CulturalAndEnlightenment";
import WorkingWithYoungPeople from "./pages/Activity/WorkingWithYoungPeople";
import CreativeSpark from "./pages/Activity/InternationalRelations/CreativeSpark";
import DepartmentOfInternationalCooperation from "./pages/Activity/InternationalRelations/DepartmentOfInternationalCooperation";
import Ka107 from "./pages/Activity/InternationalRelations/Erasmus/Ka107";
import Mechauz from "./pages/Activity/InternationalRelations/Erasmus/Mechauz";
import SpaceCom from "./pages/Activity/InternationalRelations/Erasmus/SpaceCom";
import Doktorantura from "./pages/Activity/ScienceAndInnovation/Doktorantura";
import Innovation from "./pages/Activity/ScienceAndInnovation/Innovation";
import Science from "./pages/Activity/ScienceAndInnovation/Science";

// no-corruption
import NoCorruption from "./pages/NoCorruption";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home
  },
  {
    name: "NoCorruption",
    path: "/no_corruption/:id",
    component: NoCorruption
  },
  // NEWS

  {
    name: "news",
    path: "/news",
    component: News
  },
  {
    name: "news-single",
    path: "/news/:id",
    component: NewsSingle
  },

  // UNIVERSITY
  {
    name: "Requisites",
    path: "/university/requisites",
    component: Requisites
  },
  {
    name: "VirtualReception",
    path: "/university/virtual_reception",
    component: VirtualReception
  },
  {
    name: "rector_congratulations",
    path: "/university/rector_congratulations",
    component: RectorCongratulations
  },
  {
    name: "university_regulations",
    path: "/university/university_regulations",
    component: UniversityRegulations
  },
  {
    name: "regulatory_documents",
    path: "/university/regulatory_documents",
    component: RegulatoryDoc
  },
  {
    name: "history_of_university",
    path: "/university/history_of_university",
    component: HistoryUniversity
  },

  // Structure
  {
    name: "faculties",
    path: "/structure/faculties",
    component: Faculties
  },
  {
    name: "chairs",
    path: "/structure/chairs",
    component: Chairs
  },
  {
    name: "tdtu_structure",
    path: "/structure/tdtu_structure",
    component: TdtuStructure
  },
  {
    name: "information_center",
    path: "/structure/centers/information_center",
    component: InformationCenter
  },
  {
    name: "digital_learning_technologies_center",
    path: "/structure/centers/digital_learning_technologies_center",
    component: DigitalLearningTechnologiesCenter
  },
  {
    name: "personal_training_center",
    path: "/structure/centers/personal_training_center",
    component: PersonalTrainingCenter
  },
  {
    name: "japan_innovation_center",
    path: "/structure/centers/japan_innovation_center",
    component: JapanInnovationCenter
  },
  {
    name: "industrial_training_center",
    path: "/structure/centers/industrial_training_center",
    component: IndustrialTrainingCenter
  },
  // {
  //   name: "rectorate",
  //   path: "/structure/rectorate",
  //   component: Rectorate
  // },
  // sections
  {
    name: "master_system",
    path: "/structure/sections/master_system",
    component: MasterSystem
  },
  {
    name: "researching_system_section",
    path: "/structure/sections/researching_system_section",
    component: ResearchingSystemSection
  },
  {
    name: "teaching_methodology_section",
    path: "/structure/sections/teaching_methodology_section",
    component: TeachingMethodologySection
  },
  {
    name: "inside_monitoring_section",
    path: "/structure/sections/inside_monitoring_section",
    component: InsideMonitoringSection
  },
  {
    name: "science_section",
    path: "/structure/sections/science_section",
    component: ScienceSection
  },
  {
    name: "gifted_students_section",
    path: "/structure/sections/gifted_students_section",
    component: GiftedStudentsSection
  },
  {
    name: "human_resources_section",
    path: "/structure/sections/human_resources_section",
    component: HumanResourcesSection
  },
  {
    name: "youth_union_department_section",
    path: "/structure/sections/youth_union_department_section",
    component: YouthUnionDepartmentSection
  },
  {
    name: "accounting_section",
    path: "/structure/sections/accounting_section",
    component: AccountingSection
  },
  {
    name: "monitoring_of_graduates_section",
    path: "/structure/sections/monitoring_of_graduates_section",
    component: MonitoringOfGraduatesSection
  },
  {
    name: "industrial_economics_section",
    path: "/structure/sections/industrial_economics_section",
    component: IndustrialEconomicsSection
  },

  // Branches
  {
    name: "olmaliq_branch",
    path: "/structure/branches/olmaliq_branch",
    component: OlmaliqBranch
  },
  {
    name: "termiz_branch",
    path: "/structure/branches/termiz_branch",
    component: TermizBranch
  },
  {
    name: "qoqon_branch",
    path: "/structure/branches/qoqon_branch",
    component: QoqonBranch
  },
  // Activity
  {
    name: "financial_activity",
    path: "/activity/financial_activity",
    component: FinancialActivity
  },
  {
    name: "science",
    path: "/activity/science",
    component: Science
  },
  {
    name: "innovation",
    path: "/activity/innovation",
    component: Innovation
  },
  {
    name: "doktorantura",
    path: "/activity/doktorantura",
    component: Doktorantura
  },
  {
    name: "working_with_young_people",
    path: "/activity/working_with_young_people",
    component: WorkingWithYoungPeople
  },
  {
    name: "cultural_and_enlightenment",
    path: "/activity/cultural_and_enlightenment",
    component: CulturalAndEnlightenment
  },
  {
    name: "department_of_international_cooperation",
    path: "/activity/department_of_international_cooperation",
    component: DepartmentOfInternationalCooperation
  },
  {
    name: "creative_spark",
    path: "/activity/creative_spark",
    component: CreativeSpark
  },
  {
    name: "mechauz",
    path: "/activity/mechauz",
    component: Mechauz
  },
  {
    name: "space_com",
    path: "/activity/space_com",
    component: SpaceCom
  },
  {
    name: "ka107",
    path: "/activity/ka107",
    component: Ka107
  }
];

export default routes;
