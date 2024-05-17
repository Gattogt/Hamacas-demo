import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to Amacas Wendy',
  description: 'Las amacas wendy te dejan dormido con solo verlas',
  keywords: 'amacas compra amacas',
};

export default Meta;
