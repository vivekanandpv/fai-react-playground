import * as React from 'react';
import { axiosInstance } from '../http-service';

interface HomeProps {}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Home: React.FunctionComponent<HomeProps> = (props) => {
  const [items, setItems] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    //  Promise-callback approach

    // axiosInstance.get<Todo[]>('todos').then((res) => {
    //   setItems((s) => {
    //     return res.data;
    //   });
    // });

    //  Async-await approach
    const populateData = async () => {
      const todos = await (
        await axiosInstance.get<Todo[]>('todos', {
          headers: {
            'X-custom-header': 'Component-Value goes here!',
          },
        })
      ).data;
      setItems((s) => {
        return todos;
      });
    };

    populateData();
  }, []);

  return (
    <>
      <h3>Home Component</h3>

      <table className='table table-bordered table-sm'>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => {
            return (
              <tr key={i.id}>
                <td>{i.userId}</td>
                <td>{i.title}</td>
                <td>{i.completed ? <span>Yes</span> : <span>No</span>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
