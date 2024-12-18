"use client";

import { faPencil, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'
import { getData, setUpdateStatus } from './models/mahasiswa';

//buat fungsi untuk dialog hapus
async function setDelete(npm: string, nama: string) {
  // alert("Hapus Data");
  if(confirm(`Data Mahasiswa : ${npm} - ${nama} Ingin Dihapus`) == true)
  {
    await setUpdateStatus(npm)
    alert(`Data Mahasiswa : ${npm} - ${nama} Berhasil Dihapus`);
    // reload otomatis
    location.reload();
  }
  // else
  // {
  //   alert("Cancel")
  // }
}

export default function RootPage() {
  // hook dengan "use state" di page bawah RootPage
  const [getValue, setValue] = useState({});

  //buat fungsi untuk panggil "getData"
  async function fetchData() {
    setValue(await getData());
  }

  // hook dengan "use effect" dibawah useState
  useEffect(() => {
    fetchData();
  }, [])
  
  //buat variabel "mahasiswa"
  
  // const mahasiswa = await prisma.tb_mahasiswa.findUnique({
  //   where: {
  //     id: 3,
  //   },
  // })
  return (
    <>
    <title>View Data Mahasiswa</title>

    {/* button dari daisyUI */}
    <nav className="text-center mb-1 flex">
    <Link href={"/add"} className="btn btn-outline btn-accent">
      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      Tambah data mahasiswa</Link>
    </nav>
    

      {/* tampilkan data mahasiswa */}
      <table className='w-full '>
          <thead>
            <tr className='bg-slate-300 h-12 '>
              <th className='w-10% border border-slate-700'>Aksi</th>
              <th className='w-10% border border-slate-700'>NPM</th>
              <th className='w-1/2 border border-slate-700'>Nama</th>
              <th className='w-30% border border-slate-700'>Prodi</th>
            </tr>
          </thead>
        <tbody>
      {Object.values(getValue).map((data: any, index: number, ) => (
        // <div key={index}>
        //   <div>
        //     {data.npm} - {data.nama} - {data.prodi}
        //   </div>
        // </div>
          
            <tr key={index}>
              <td className='border border-slate-700 p-2.5 text-center'>
                {/* icon edit */}
                <Link href={`/edit/${btoa(data.npm)}`} className='bg-sky-700 text-white p-2 rounded-md mr-1' title='Ubah Data'>
                  <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                </Link>

                {/* icon delete */}
                <Link href={"/"} className='bg-red-600 text-white p-2 rounded-md ml-1' title='Hapus Data' 
                onClick={() => {setDelete(data.npm,  data.nama)}}>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </Link>
              </td>
              <td className='border border-slate-700 px-2.5 text-center'>{data.npm}</td>
              <td className='border border-slate-700 px-2.5 text-justify'>{data.nama}</td>
              <td className='border border-slate-700 px-2.5 text-center'>{data.prodi}</td>
            </tr>
      ))}
        </tbody>
      </table>
      {/* {mahasiswa?.nama} */}
    </>
  )
}