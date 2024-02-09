import React, { useState } from "react";
import api from "../../../services/api";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import Adds from "../../layout/Unar/Adds";

const AddUnar = () => {
    const [value, setValue] = useState({});
    const navigate = useNavigate()

    const handleSetValue = (val) => {
        setValue(val);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/identifikasi.php', value);
            Swal.fire({
                icon: "success",
                text: response.message
            })
            navigate("/monitoring/identifikasi")
        } catch (error) {
            console.error('Error membuat identifikasi:', error);
            Swal.fire({
                icon: "error",
                text: error.message
            })
        }
    };


    const handleUpload = (val) => {
        console.log(val, "berhasil gesss");
    };

    return <Adds setValue={handleSetValue} onFileUpload={handleUpload} />;
};

export default AddUnar;