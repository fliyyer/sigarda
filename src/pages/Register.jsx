import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Pendaftaran Akun Baru</h1>
      <p className="text-lg mb-8">
        Kontak{' '}
        <a
          href="mailto:superadmin@balmon.com"
          className="text-blue-500 hover:underline">
          superadmin@balmon.com
        </a>{' '}
        untuk membuat Akun baru.
      </p>
      <p
        onClick={goBack}
        className="text-blue-500 hover:underline cursor-pointer">
        Kembali ke Halaman Sebelumnya
      </p>
    </div>
  );
};

export default Register;
