"use client";
import React, { useState } from 'react'
import { checkData, saveData } from '../models/mahasiswa';
import Link from 'next/link';

export default function AddPage() {
    //buat hook (use state)
    const [getNPM, setNPM] = useState("");
    const [getNAMA, setNAMA] = useState("");
    const [getPRODI, setPRODI] = useState("");

    //buat hook (usestate)
    //untuk respon hasil fungsi "checkData"
    const [getValue, setValue] = useState({});

    //buat fungsi untuk respon fungsi "checkData"
    const checkNPM = async (npm: string) => {
        setValue(await checkData(npm))
    }

    //buat fungsi simpan data
    const setSaveData = async() => {
        // if(getNPM == "" || getNAMA == "" || getPRODI == ""){
        //     alert("Lengkapi seluruh data")
        // }else{
        //     alert("ok")
        // }

        //tenary operator if, else
        (getNPM == "" || getNAMA == "" || getPRODI == "")
            ? alert("Lengkapi seluruh data")
            : (Object.values(getValue).length == 0)
                ? [await saveData(getNPM, getNAMA, getPRODI),
                    alert("Berhasil simpan"),
                    location.reload()
                ]
                : alert ("NPM Sudah ada")
        // jika tenary operator pernyataan nya lebih dari satu pakai array
        // : [alert("ok"), alert ("yes")]
    };


    //tenary operator if, else if, else if
    // (getNPM == "" || getNAMA == "" || getPRODI == "")
    // ? alert("Lengkapi seluruh data")  
    // : (xxx)
    // ? alert ("")
    // : (yyy)
    // ? alert ("")
    // : "-"
    // };

    return (
        <>
            <title>tambah data mahasiswa</title>
            <div className="grid grid-cols-10 gap-4 items-center">
                <div className="">NPM</div>
                <div className=" col-span-4"><input type="text" placeholder="NPM" className="input input-bordered w-full "
                    onChange={(e) => {
                        setNPM(e.target.value);
                        checkNPM(e.target.value)
                    }} /></div>
                <div className=" col-start-1">Nama</div>
                <div className=" col-span-4"><input type="text" placeholder="NAMA" className="input input-bordered w-full "
                    onChange={(e) => {
                        setNAMA(e.target.value);

                    }} /></div>
                <div className=" col-start-1">Program studi</div>
                <div className=" col-span-4">
                    <select defaultValue={""} className="select select-bordered w-full" onChange={(e) => {
                        setPRODI(e.target.value);

                    }}>
                        <option value={""} disabled>Pilih Prodi</option>
                        <option value={"Informatika"}>Informatika</option>
                        <option value={"Sistem Informasi"}>Sistem Informasi</option>
                        <option value={"Teknik Sipil"}>Teknik Sipil</option>
                        <option value={"Teknik Komputer"}>Teknik Komputer</option>
                        <option value={"Teknologi Informasi"}>Teknologi Informasi</option>
                    </select></div>
                <div className="col-start-2 col-span-4"><button className="btn mr-5x w-20" onClick={setSaveData}>Simpan</button>
                    <Link href={"/"} className="btn btn-neutral ml-5x w-20">Batal</Link>
                </div>
            </div>
        </>
    )
}
