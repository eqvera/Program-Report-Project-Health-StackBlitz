import React from 'react';
    import './index.css';
    import { Space, Table, Tag, Progress } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  supplyHealthPct: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Supply chain health',
    key: 'supplyHealthPct',
    dataIndex: 'supplyHealthPct',
    render: (_, { supplyHealthPct }) => (
      <>
        <Progress percent={100} strokeColor={{ '0%': '#4bd19c', '40%': '#4bd19c', '40.001%': '#f79b00', '60%': '#f79b00', '60.001%': '#e92420', '80%': '#e92420', '80.001%':'#d2d2d2', '100%': '#d2d2d2' }} showInfo={false}/>
        <Progress percent={60} steps={10} strokeColor={["green", "red"]} />
        <Progress percent={supplyHealthPct} success={{percent:20, strokeColor: "red"}} showInfo={false} />
        {supplyHealthPct}% on time
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    supplyHealthPct: 80
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    supplyHealthPct: 100
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    supplyHealthPct: 60
  },
];

const App: React.FC = () => <Table columns={columns} dataSource={data} />;

export default App;