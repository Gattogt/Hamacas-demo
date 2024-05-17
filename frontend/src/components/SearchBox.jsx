import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = (e) => {
    setKeyword('');
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate('/');
    }
  };

  return (
    <Form
      onSubmit={submitHandler}
      className='d-flex'
      style={{ marginRight: '20px' }}
    >
      <Form.Control
        placeholder='Search products...'
        type='text'
        name='q'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className='mr-sm-2 ml-sm-5'
        style={{ color: '	#adbcd9' }}
      ></Form.Control>
      <Button type='submit' className='p-2 mx-2 mr-8'>
        Search
      </Button>
    </Form>
  );
};
export default SearchBox;
