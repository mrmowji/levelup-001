import axios from 'axios';
import TypicodeEndpoint from '../source/endpoint/typicode-endpoint';

jest.mock('axios');

test('Should fetch response', () => {
  const record = {
    data: {
      title: "Title",
      body: "Some text.",
      userId: 1
    },
    id: 10
  };
  const response = { data: record };
  axios.post.mockResolvedValue(response);

  return TypicodeEndpoint.post("Title", "Some text.").then(data => expect(data.data).toEqual(record));
});