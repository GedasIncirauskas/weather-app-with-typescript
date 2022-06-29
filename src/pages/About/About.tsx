import { Accordion } from '../../components';
import { companyServiceData } from '../../utils/data';
import { translations } from '../../utils/translations';

const About: React.FC = () => {
  return (
    <>
      <h1>{translations.msg_page_about_services_label}</h1>
      <Accordion data={companyServiceData} />
    </>
  );
};

export default About;
