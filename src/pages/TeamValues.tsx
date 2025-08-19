import {
  LineChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer
} from 'recharts';

const TeamValues = () => {
  const data = [
    { value: "Trust", score: 80 },
    { value: "Integrity", score: 70 },
    { value: "Empathy", score: 90 },
    { value: "Creativity", score: 65 },
    { value: "Discipline", score: 75 },
  ];

  return (
    <section className='card bg-base-100 shadow-sm dark:bg-[#28264f]  min-[285px]:w-xs min-[285px]:mx-auto lg:w-120 rounded-xl py-5'>
      <div className='card-body px-7'>
        <h2 className="card-title text-xl dark:text-white text-gray-600">
          Team Values
        </h2>
        <hr className='py-5 text-gray-300'/>
        <div className="h-[300px] -translate-x-5">
          <ResponsiveContainer className="w-full h-full">
          <LineChart data={data}>
            <CartesianGrid stroke='#ccc' />
            <Line type="monotone" dataKey="score" />
            <XAxis dataKey="value" />
            <YAxis />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
        </div>
        

      </div>
    </section>
  )
}

export default TeamValues