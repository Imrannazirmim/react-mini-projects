import { useState } from "react";
import { data } from "../utils/data";
import { BiSort } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { MdSort } from "react-icons/md";

const Table = () => {
  const [projects, setProjects] = useState(data);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);
  const [filterVisible, setFilterVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [filters, setFilters] = useState({
    name: "",
    email: "",
    country: "",
    project: "",
    status: "",
  });
  const [statusDropdownVisible, setStatusDropdownVisible] = useState<
    number | null
  >(null);

  // filtering name, emeil,country,project,status

  const sortProjects = (key: string) => {
    const sortedProject = [...projects];

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      sortedProject.sort((a, b) => (a[key] > b[key] ? -1 : 1));
      setSortConfig({ key, direction: "descending" });
    } else {
      sortedProject.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      setSortConfig({ key, direction: "ascending" });
    }

    setProjects(sortedProject);
  };

  const handleSortOptionClick = (key: string) => {
    sortProjects(key);
    setDropdownVisible(false);
  };

  const handleFiltersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.value]: e.target.value,
    });
  };

  const handleStatusChange = (index: number, newStatus: string) => {
    const updateProjects = projects.map((project, i) =>
      i === index
        ? {
            ...project,
            status: newStatus,
            progress: newStatus === "Completed" ? "100%" : project.progress,
          }
        : project,
    );
    setProjects(updateProjects);
    setStatusDropdownVisible(null);
  };

  const filteredProjects = projects.filter(
    (project) =>
      searchQuery === "" ||
      (Object.values(project).some((value) =>
        value.toLowerCase().includes(searchQuery.toLowerCase()),
      ) &&
        filters.name === "") ||
      (project.country.toLowerCase().includes(filters.country.toLowerCase()) &&
        filters.email === "") ||
      (project.email.toLowerCase().includes(filters.email.toLowerCase()) &&
        filters.project === "") ||
      (project.project.toLowerCase().includes(filters.project.toLowerCase()) &&
        filters.stattus === "") ||
      project.status.toLowerCase().includes(filters.stattus.toLowerCase()),
  );
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="p-4 w-[93%] scroll ml-[9rem]">
      {/* sorting */}

      <div className="flex items-center mb-5">
        <div className="relative">
          <button
            onClick={() => setDropdownVisible(!dropdownVisible)}
            className="border border-gray-700 flex items-center justify-center text-white p-2 rounded"
          >
            <BiSort className="mr-[0.3rem]" />
            Sort
            <AiOutlineDown className="ml-2" />
          </button>

          {dropdownVisible && (
            <div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-800 rounded shadow-lg">
              <button
                onClick={() => handleSortOptionClick("client")}
                className="block px-4 py-2 text-white w-full hover:bg-gray-700"
              >
                Name
              </button>
              <button
                onClick={() => handleSortOptionClick("country")}
                className="block px-4 py-2 text-white w-full hover:bg-gray-700"
              >
                Country
              </button>
              <button
                onClick={() => handleSortOptionClick("date")}
                className="block px-4 py-2 text-white w-full hover:bg-gray-700"
              >
                Date
              </button>
            </div>
          )}
        </div>

        <div className="relative ml-4 w-full">
          <button
            onClick={() => setFilterVisible(!filterVisible)}
            className="border border-gray-700 flex items-center justify-center text-white p-2 rounded"
          >
            <MdSort className="mr-[0.3rem]" />
            Filters
            <AiOutlineDown className="ml-2" />
          </button>
          {filterVisible && (
            <div className="absolute top-full left-0 mt-2 bg-gray-900 border border-gray-700 rounded shadow-lg p-4">
              <div className="mb-2">
                <label htmlFor="name" className="block text-white">
                  Filter By Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={filters.name}
                  onChange={handleFiltersChange}
                  className="bg-gray-600 rounded-2xl text-white rouned p-2 w-full mt-1 outline-none"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="block text-white">
                  Filter By Email
                </label>
                <input
                  type="text"
                  name="email"
                  onChange={handleFiltersChange}
                  className="bg-gray-600 rounded-2xl text-white rouned p-2 w-full mt-1 outline-none"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="country" className="block text-white">
                  Filter By Country
                </label>
                <input
                  type="text"
                  name="country"
                  onChange={handleFiltersChange}
                  className="bg-gray-600 rounded-2xl text-white rouned p-2 w-full mt-1 outline-none"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="project" className="block text-white">
                  Filter By Project
                </label>
                <input
                  type="text"
                  name="project"
                  onChange={handleFiltersChange}
                  className="bg-gray-600 rounded-2xl text-white rouned p-2 w-full mt-1 outline-none"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="status" className="block text-white">
                  Filter By Status
                </label>
                <input
                  type="text"
                  name="status"
                  onChange={handleFiltersChange}
                  className="bg-gray-600 rounded-2xl text-white rouned p-2 w-full mt-1 outline-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main table */}
      <table className="min-w-full table-auto rounded border border-gray-700 text-white">
        <thead>
          <tr>
            <th className="px-5 py-3 text-left">Image</th>
            <th className="px-5 py-3 text-left">Name</th>
            <th className="px-5 py-3 text-left">Country</th>
            <th className="px-5 py-3 text-left">Email</th>
            <th className="px-5 py-3 text-left">Project Name</th>
            <th className="px-5 py-3 text-left">Task Progress</th>
            <th className="px-5 py-3 text-left">Status</th>
            <th className="px-5 py-3 text-left">Date</th>
            <th className="px-5 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProjects.map((projectValue, index) => {
            const {
              image,
              client,
              country,
              email,
              project,
              progress,
              status,
              date,
            } = projectValue;
            return (
              <tr className="border border-gray-700" key={index}>
                <td className="px-4 py-2">
                  <img
                    src={image}
                    alt={client}
                    className="w-[4rem] h-[4rem] rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-2">{client}</td>
                <td className="px-4 py-2">{country}</td>
                <td className="px-4 py-2">{email}</td>
                <td className="px-4 py-2">{project}</td>
                <td className="px-4 py-2">
                  <div className="w-24 h-2 bg-gray-700 rounded">
                    <div className={`w-[${progress}] h-2 bg-green-500 rounded`}>
                      {progress}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 w-[10rem]">
                  <span
                    className={`bg-${
                      status === "completed" ? "green" : "yellow"
                    }-500 p-1 rounded`}
                  >
                    {status}
                  </span>
                </td>
                <td className="px-4 py-2">{date}</td>
                <td className="px-4 py-2">
                  <div className="relative">
                    <BsThreeDots
                      className="cursor-pointer"
                      onClick={() => setStatusDropdownVisible(index)}
                    />
                    {statusDropdownVisible === index && (
                      <div className="absolute top-full right-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg">
                        <button
                          onClick={() =>
                            handleStatusChange(index, "In Progress")
                          }
                          className="block px-4 py-2 text-white hover:bg-gray-700 w-full text-left"
                        >
                          In Progress
                        </button>
                        <button
                          onClick={() => handleStatusChange(index, "Completed")}
                          className="block px-4 py-2 text-white hover:bg-gray-700 w-full text-left"
                        >
                          Completed
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* pagination */}
      <div className="flex justify-end mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded ml-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
