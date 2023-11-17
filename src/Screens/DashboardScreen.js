import React from "react";

export const DashboardScreen = () => {
  return (
    <div className="main">
      <div className="text-wrapper">Resumen de Negocios</div>
      <div className="cards">
        <div className="div-2">
          <div className="card">
            <img src="./static/img/icon-1.svg" alt="Icon" />
            <div className="frame">
              <div className="text-wrapper-2">12,365</div>
              <div className="text-wrapper-3">Total Clientes</div>
            </div>
          </div>
          <div className="card">
            <img className="icon" alt="Icon" src=".\static\img\icon.svg" />
            <div className="frame">
              <div className="text-wrapper-2">231</div>
              <div className="text-wrapper-3">Total Reparaciones</div>
            </div>
          </div>
          <div className="card">
            <img className="icon" alt="Icon" src=".\static\img\icon-2.svg" />
            <div className="frame">
              <div className="text-wrapper-2">$ 238.53K</div>
              <div className="text-wrapper-3">Total Ventas</div>
            </div>
          </div>
        </div>
        <div className="div-2">
          <div className="card-2">
            <div className="div-3">
              <div className="text-wrapper-4">Ventas Mensuales</div>
              <div className="div-4">
                <div className="text-wrapper-5">Filter by:</div>
                <div className="text-wrapper-6">Decade</div>
                <img
                  className="polygon"
                  alt="Polygon"
                  src="static/img/polygon-1-1.svg"
                />
              </div>
            </div>
            <div className="graph">
              <div className="numbers-side">
                <div className="text-wrapper-7">500,000</div>
                <div className="text-wrapper-8">100,000</div>
                <div className="text-wrapper-8">50,000</div>
                <div className="text-wrapper-8">10,000</div>
                <div className="text-wrapper-8">0</div>
              </div>
              <div className="result">
                <div className="frame-2">
                  <div className="bars">
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                  </div>
                  <div className="bars">
                    <div className="rectangle-3" />
                    <div className="rectangle-4" />
                  </div>
                  <div className="bars">
                    <div className="rectangle-5" />
                    <div className="rectangle-6" />
                  </div>
                  <div className="bars">
                    <div className="rectangle" />
                    <div className="rectangle-7" />
                  </div>
                  <div className="bars">
                    <div className="rectangle-8" />
                    <div className="rectangle-9" />
                  </div>
                  <div className="bars">
                    <div className="rectangle-10" />
                    <div className="rectangle-11" />
                  </div>
                </div>
                <div className="group">
                  <div className="text-wrapper-9">2019</div>
                  <div className="text-wrapper-10">2018</div>
                  <div className="text-wrapper-11">2020</div>
                  <div className="text-wrapper-12">2021</div>
                  <div className="text-wrapper-13">2022</div>
                  <div className="text-wrapper-14">2023</div>
                </div>
              </div>
              <div className="legend">
                <div className="frame-3">
                  <div className="ellipse" />
                  <div className="text-wrapper-15">Income</div>
                </div>
                <div className="frame-3">
                  <div className="ellipse-2" />
                  <div className="text-wrapper-15">Expense</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-3">
            <div className="top">
              <div className="text-wrapper-4">Clientes</div>
            </div>
            <div className="ellipse-wrapper">
              <img
                className="img"
                alt="Ellipse"
                src="../static/img/ellipse-8.svg"
              />
            </div>
            <div className="legend-2">
              <div className="div-4">
                <div className="ellipse-3" />
                <div className="text-wrapper-15">Male</div>
              </div>
              <div className="div-4">
                <div className="ellipse-4" />
                <div className="text-wrapper-15">Female</div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-2">
          <div className="card-4">
            <div className="div-3">
              <div className="text-wrapper-4">
                Historial de ingresos mensuales.
              </div>
              <div className="div-4">
                <div className="text-wrapper-5">Filter by:</div>
                <div className="text-wrapper-6">Year</div>
                <img
                  className="polygon"
                  alt="Polygon"
                  src="../static/img/polygon-1-1.svg"
                />
              </div>
            </div>
            <div className="graph">
              <div className="numbers-side-2">
                <div className="text-wrapper-16">100,000</div>
                <div className="text-wrapper-17">50,000</div>
                <div className="text-wrapper-18">10,000</div>
                <div className="text-wrapper-19">5,000</div>
                <div className="text-wrapper-20">0</div>
              </div>
              <div className="result-2">
                <img
                  className="frame-4"
                  alt="Frame"
                  src="../static/img/frame-6-1.png"
                />
                <div className="div-3">
                  <div className="text-wrapper-21">Jan</div>
                  <div className="text-wrapper-21">Feb</div>
                  <div className="text-wrapper-21">Mar</div>
                  <div className="text-wrapper-21">Apr</div>
                  <div className="text-wrapper-21">May</div>
                  <div className="text-wrapper-21">Jun</div>
                  <div className="text-wrapper-21">Jul</div>
                  <div className="text-wrapper-21">Aug</div>
                  <div className="text-wrapper-21">Sep</div>
                  <div className="text-wrapper-21">Oct</div>
                  <div className="text-wrapper-21">Nov</div>
                  <div className="text-wrapper-21">Dec</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
