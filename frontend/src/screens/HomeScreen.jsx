import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Paginate from '../components/Paginate';
import Loader from '../components/Loader';
import Product from '../components/Product';
import Message from '../components/Message';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';

const HomeScreen = () => {
  const { keyword, pageNumber } = useParams();
  const {
    data,
    isLoading,
    isError: error,
  } = useGetProductsQuery({ keyword, pageNumber });

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link className='btn btn-primary my-3' to='/'>
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta title='Amacas Wendy' />
          <h1>Escoje una!</h1>
          <Row>
            {data.products.map((product) => {
              return (
                <Col key={product._id} sm={12} md={4} lg={4} xl={4}>
                  <Product product={product} />
                </Col>
              );
            })}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};
export default HomeScreen;
