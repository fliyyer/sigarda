import React, { useContext, useState } from "react";
import { generateId } from "../../utils/generateId";
import { useNavigate } from "react-router-dom";
import { InitMonitoringContext } from "../../pages/Monev/Monitoring";

const AddFrekuensi = () => {
  const MonitoringContext = useContext(InitMonitoringContext)
  const { setValue, value } = MonitoringContext.identifikasiPage.table
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    id: generateId(value),
    frekuensi: "",
    client: "",
    service: "",
    subservice: "",
    kelasemisi: "",
    status: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue([...value, formData])
    navigate("/monitoring/identifikasi")
  };

  const services = ["Amateur", "Broadcast", "Distress", "Fixed", "Land Mobile", "Maritime", "Satellite"];
  const subservices = ["AM", "FM", "DVB-T", "Ground To Air", "Vessel Station", "P2P", "M2P"];
  const kelasemisiOptions = ["A3E", "C3F", "F3E"];
  const statusOptions = ["On Air", "Off Air", "Prelim. Cancel"];

  return (
    <div className="container mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="w-[400px] bg-[#F6F8FF] p-10 rounded-[40px] flex flex-col"
      >
        <div className="mb-4">
          <label className="block text-base text-[#457EFF] font-medium">
            Frekuensi
          </label>
          <input
            type="text"
            name="frekuensi"
            value={formData.frekuensi}
            placeholder="Input frekuensi (MHz)"
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border placeholder:text-[#666666] shadow-sm placeholder:text-sm rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base text-[#457EFF] font-medium">
            Client
          </label>
          <input
            type="text"
            name="client"
            placeholder="Input Nama Client"
            value={formData.client}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border placeholder:text-[#666666] shadow-sm placeholder:text-sm rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base text-[#457EFF] font-medium">
            Servis
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="mt-1 p-2 py-3 w-full border text-[#666666] rounded-lg"
          >
            <option className="" value="">
              Piih Servis
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-base text-[#457EFF] font-medium">
            Subservis
          </label>
          <select
            name="subservis"
            value={formData.subservice}
            onChange={handleInputChange}
            className="mt-1 p-2 py-3 w-full border text-[#666666] rounded-lg"
          >
            <option value="">Pilih Subservis</option>
            {subservices.map((subservice) => (
              <option
                className="text-[#000] font-medium space-y-3 mt-3 rounded-sm"
                key={subservice}
                value={subservice}
              >
                {subservice}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-base text-[#457EFF] font-medium">
            Kelas Emisi
          </label>
          <select
            name="kelasemisi"
            value={formData.kelasemisi}
            onChange={handleInputChange}
            className="mt-1 p-2 py-3 w-full border text-[#666666] rounded-lg"
          >
            <option className="text-[#000] font-medium space-y-3 mt-3 rounded-sm">
              Pilih Kelas Emisi
            </option>
            {kelasemisiOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-base text-[#457EFF] font-medium">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="mt-1 p-2 py-3 w-full border text-[#666666] rounded-lg"
          >
            <option className="text-[#000] font-medium space-y-3 mt-3 rounded-sm">
              Select Status
            </option>
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-[#457EFF] text-white px-5 py-3 hover:bg-darker duration-100 ease-in-out rounded-[40px]"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFrekuensi;
