import { Select } from "antd";
import { useState } from "react";

const DigitalArchives = () => {
  const [category, setCategory] = useState("Events");
  const [search, setSearch] = useState("");

  const archiveItems = [
    {
      id: 1,
      title: "Cultural Day – March 25, 2024",
      description: "A celebration of local traditions and creative expression.",
      tags: ["heritage", "team"],
      type: "Events",
    },
    {
      id: 2,
      title: "Echoes of Heritage",
      description: "Photographs capturing the timeless beauty of cultural sites.",
      tags: ["culture", "photo"],
      type: "Culture",
    },
    {
      id: 3,
      title: "Reflections and Growth",
      description: "Team members share personal insights and learning experiences.",
      tags: ["reflections", "feedback"],
      type: "Reflections",
    },
  ];

  const filteredItems = archiveItems.filter(
    (item) =>
      item.type === category &&
      item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-6 bg-gradient-to-b from-[#1e1b3a] to-[#6b21a8] text-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="mb-6">
          <h2 className="text-3xl font-bold">Digital Archives</h2>
          <p className="text-sm text-gray-300 mt-1">
            Preserving cultural moments, team reflections, and shared insights.
          </p>
        </div>

        <div className=" flex flex-wrap gap-2 mb-6">
          <Select
            value={category}
            onChange={(value) => setCategory(value)}
            className="bg-white text-black px-3 py-2 rounded"

          >
            <Select.Option value="events">Events</Select.Option>
            <Select.Option value="culture">Culture</Select.Option>
            <Select.Option value="reflections">Reflections</Select.Option>
          </Select>
        </div>
      </div>


      {/* Filters */}


      {/* Archive Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-[#2e2b4f] p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300 mb-3">{item.description}</p>
            <div className="flex gap-2 flex-wrap mb-3">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button className="text-purple-300 underline text-sm hover:text-purple-400 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalArchives;