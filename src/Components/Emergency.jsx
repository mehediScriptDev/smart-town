import { FiAlertTriangle } from "react-icons/fi";
import { GiFlame } from "react-icons/gi";
import { LuZap } from "react-icons/lu";
import { LuMapPinned } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";

const Emergency = () => {
  const emergencyContacts = [
    {
      id: 1,
      department: "Riverside Police Department",
      type: "Police",
      address: "Puraton bus stand, Tangail",
      emergency: "911",
      regular: "(555) 911",
      icon: <FiAlertTriangle className="text-red-500" />,
    },
    {
      id: 2,
      department: "Riverside Fire Station",
      type: "Fire",
      address: "Puraton bus stand,Tangail",
      emergency: "911",
      regular: "(555) 911",
      icon: <GiFlame className="text-red-500" />,
    },
    {
      id: 3,
      department: "Electric Department",
      type: "Utility",
      address: "123 Power Street",
      emergency: "(555) 456-7999",
      regular: "(555) 456-7890",
      icon: <LuZap className="text-red-500" />,
    },
  ];
  return (
    <section className="bg-red-50 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-2">Emergency Contacts</h2>
      <p className="text-gray-600 mb-10">Important numbers to keep handy</p>
      <div className="grid md:grid-cols-3 gap-6">
        {emergencyContacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white rounded-lg shadow p-6 border border-red-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 p-3 rounded-full">{contact.icon}</div>
              <div className="text-left">
                <h3 className="font-bold text-lg">{contact.department}</h3>
                <p className="text-sm text-gray-500">{contact.type}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <LuMapPinned className="w-4 h-4 mr-2 text-red-400" />
              <span className="font-semibold">{contact.address}</span>
            </div>
            <button className="bg-red-500 text-white w-full py-2 rounded flex items-center justify-center gap-2 text-lg font-medium">
              <FaPhoneAlt className="w-5 h-5" />
              {contact.emergency}
            </button>
            <div className="mt-4 border rounded py-2 text-red-600 font-semibold">
              Regular: {contact.regular}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-8 px-6 py-3 border border-red-500 text-red-600 font-semibold rounded hover:bg-red-100 transition">
        See All Emergency Contacts
      </button>
    </section>
  );
};

export default Emergency;
