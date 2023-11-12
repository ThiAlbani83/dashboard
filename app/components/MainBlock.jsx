'use client'

import Image from "next/image";
import React, { useState } from "react";
import { Chart } from "react-google-charts";
import Charts from "../../public/assets/Chart.png";
import { LuClipboardList } from "react-icons/lu";

const MainBlock = () => {
  const [options, setOptions] = useState({
    title: "Apostas por Modalidade",
  });
  const [data, setData] = useState([
    ["Modalidade", "Valor Apostado"],
    ["Cassino", 24785],
    ["Sportsbook", 20254],
    ["E-Sports", 10265],
  ]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-0">
      <div className="flex items-center gap-5 w-full h-full">
        <div className="w-[65%]  px-20 py-10 flex flex-col gap-6">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-gray-900 text-sm">GGR</span>
              <h2 className="text-gray-900 font-semibold text-xl">R$10.000</h2>
              <p className="text-[#737B8B] text-xs">
                <span className="text-[#149D52]">+5.3% </span>vs última semana
              </p>
            </div>
            <button className="bg-purple-600 text-white active:scale-90 duration-150 px-4 py-[6px] rounded-md shadow-sm">
              Ver Relatório
            </button>
          </div>
          <p className="text-sm text-[#737B8B]">GGR de 1 a 12 Nov, 2023</p>
          <Image src={Charts} alt="chart" />
          <div className="flex gap-5 text-xs text-[#121212]">
            <div className="flex gap-2 items-center">
              <input type="radio" name="range" />
              <label>Últimos 7 dias </label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="radio" name="range" />
              <label>Últimos 15 dias </label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="radio" name="range" />
              <label>Último mês </label>
            </div>
          </div>
        </div>
        <div className="w-0 h-[380px] border border-gray-200" />
        <div className="w-[35%] h-96 py-0">
          <div className="flex items-center justify-between pr-5">
            <h1 className="text-gray-900 text-2xl w-full text-start">
              Top Winners
            </h1>
            <button className="bg-purple-600 w-40 text-white active:scale-90 duration-150 px-4 py-[6px] rounded-md shadow-sm">
              Ver Relatório
            </button>
          </div>

          <div className="flex gap-5 text-xs text-[#121212] items-center justify-start">
            <div className="flex gap-2 items-center">
              <input type="radio" name="range2" />
              <label>Hoje </label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="radio" name="range2" />
              <label>Última Semana </label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="radio" name="range2" />
              <label>Último mês </label>
            </div>
          </div>
          <div className="flex items-center justify-start pr-5  py-5">
            <table className="font-semibold w-full border-collapse">
              <tr>
                <th>Jogador</th>
                <th>Valor Ganho</th>
                <th>Jogo</th>
              </tr>
              <tr>
                <td>Thiago Albani</td>
                <td>R$5.650,00</td>
                <td>Aviator</td>
              </tr>
              <tr>
                <td>Marcelo Oliveira</td>
                <td>R$4.500,00</td>
                <td>Roleta</td>
              </tr>
              <tr>
                <td>Flávio Correa</td>
                <td>R$4.350,00</td>
                <td>Bac Bo</td>
              </tr>
              <tr>
                <td>Rui Oliveira</td>
                <td>R$3.500,00</td>
                <td>Fortune Tiger</td>
              </tr>
              <tr>
                <td>Laís Bernardes</td>
                <td>R$3.000,00</td>
                <td>Mines</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full h-0 border border-gray-200" />
      <div className="flex w-full h-full py-5">
        <div className="w-full">
          <div className="flex px-5 items-center justify-between pr-5">
            <h1 className="text-gray-900 text-2xl w-full text-start">
              Cassino
            </h1>
            <button className="bg-purple-600 w-40 text-white active:scale-90 duration-150 px-4 py-[6px] rounded-md shadow-sm">
              Ver Relatório
            </button>
          </div>
          <div className="flex items-center justify-center px-5 py-5">
            <table className="font-semibold w-full border-collapse">
              <tr>
                <th>Jogo</th>
                <th>Total Apostado</th>
                <th>Total Pago</th>
                <th>GGR</th>
              </tr>
              <tr>
                <td>Aviator</td>
                <td>R$15.000</td>
                <td>21.000</td>
                <td className="text-red-500">R$ -6.000</td>
              </tr>
              <tr>
                <td>Fortune Tiger</td>
                <td>R$13.000</td>
                <td>R$18.000</td>
                <td className="text-red-500">R$ -5.000</td>
              </tr>
              <tr>
                <td>Fortune Ox</td>
                <td>R$11.000</td>
                <td>R$15.000</td>
                <td className="text-red-500">R$ -4.000</td>
              </tr>
              <tr>
                <td>Mines</td>
                <td>R$12.000</td>
                <td>R$15.000</td>
                <td className="text-red-500">R$ -3.000</td>
              </tr>
              <tr>
                <td>Sweet Bonanza</td>
                <td>R$25.000</td>
                <td>R$23.000</td>
                <td className="text-green-500">R$5.000</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="w-0 h-[380px] border border-gray-200" />
        <div className="w-full h-96">
          <div className="w-full">
            <div className="flex px-5 items-center justify-between pr-5">
              <h1 className="text-gray-900 text-2xl w-full text-start">
                Sportsbook
              </h1>
              <button className="bg-purple-600 w-40 text-white active:scale-90 duration-150 px-4 py-[6px] rounded-md shadow-sm">
                Ver Relatório
              </button>
            </div>
            <div className="flex items-center justify-center px-5 py-5">
              <table className="font-semibold w-full border-collapse">
                <tr>
                  <th>Jogador</th>
                  <th>Total Apostado</th>
                  <th></th>
                </tr>
                <tr>
                  <td>Rodrigo Silva</td>
                  <td>R$15.000</td>
                  <td className="flex gap-1 items-center text-purple-600 font-semibold cursor-pointer active:scale-95 duration-150">
                    <LuClipboardList /> Ver apostas
                  </td>
                </tr>
                <tr>
                  <td>Carlos Andrade</td>
                  <td>R$13.000</td>
                  <td className="flex gap-1 items-center text-purple-600 font-semibold cursor-pointer active:scale-95 duration-150">
                    <LuClipboardList /> Ver apostas
                  </td>
                </tr>
                <tr>
                  <td>Victor Dias</td>
                  <td>R$11.000</td>
                  <td className="flex gap-1 items-center text-purple-600 font-semibold cursor-pointer active:scale-95 duration-150">
                    <LuClipboardList /> Ver apostas
                  </td>
                </tr>
                <tr>
                  <td>Luan Pereira</td>
                  <td>R$8.000</td>
                  <td className="flex gap-1 items-center text-purple-600 font-semibold cursor-pointer active:scale-95 duration-150">
                    <LuClipboardList /> Ver apostas
                  </td>
                </tr>
                <tr>
                  <td>Fernando Cardoso</td>
                  <td>R$4.000</td>
                  <td className="flex gap-1 items-center text-purple-600 font-semibold cursor-pointer active:scale-95 duration-150">
                    <LuClipboardList /> Ver apostas
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="w-0 h-[380px] border border-gray-200" />
        <div className="w-full h-96 flex items-center justify-center">
          <Chart
            width={"500px"}
            height={"300px"}
            chartType="PieChart"
            data={data}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
