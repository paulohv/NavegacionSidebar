import React from "react";
import { DashboardScreen } from "./Screens/DashboardScreen";

export const Drawer = () => {
  return (
    <div className="dashboard">
      <div className="div">
        <DashboardScreen />
        <div className="sidebar">
          <div className="top-2">
            <div className="name">
              <div className="new-wrapper">
                <div className="new">
                  <div className="overlap-group">
                    <img
                      className="vector"
                      alt="Vector"
                      src=".\static\img\vector-1.svg"
                    />
                    <img
                      className="ellipse-5"
                      alt="Ellipse"
                      src="./static/img/ellipse-1.svg"
                    />
                    <img
                      className="ellipse-6"
                      alt="Ellipse"
                      src="./static/img/ellipse-3.svg"
                    />
                    <img
                      className="ellipse-7"
                      alt="Ellipse"
                      src="./static/img/ellipse-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="frame">
                <div className="text-wrapper-22">Greenservice</div>
                <div className="text-wrapper-3">Administrador</div>
              </div>
            </div>
            <div className="links">
              <div className="frame-5">
                <div className="rectangle-12" />
                <img
                  className="img-2"
                  alt="Humbleicons"
                  src="../static/img/humbleicons-dashboard.svg"
                />
                <div className="text-wrapper-23">Dashboard</div>
              </div>
              <img
                className="frame-6"
                alt="Frame"
                src="../static/img/frame-6.png"
              />
              <div className="frame-7">
                <img
                  className="img-2"
                  alt="Tabler report search"
                  src="../static/img/tabler-report-search.svg"
                />
                <div className="text-wrapper-24">Clientes</div>
              </div>
              <div className="frame-7">
                <img
                  className="trolley"
                  alt="Trolley"
                  src="../static/img/trolley6-122343-1.png"
                />
                <div className="text-wrapper-24">Inventario</div>
              </div>
              <div className="frame-7">
                <img
                  className="img-2"
                  alt="Ph gear six"
                  src="../static/img/ph-gear-six.svg"
                />
                <div className="text-wrapper-24">Administrar</div>
              </div>
              <div className="seperator" />
              <div className="frame-7">
                <img
                  className="img-2"
                  alt="Ci log out"
                  src="../static/img/ci-log-out.svg"
                />
                <div className="text-wrapper-24">Log out</div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="left">
            <div className="logo">
              <div className="left">
                <img
                  className="logo-greenbelt"
                  alt="Logo greenbelt"
                  src="./static/img/logo-greenbelt-1.png"
                />
              </div>
            </div>
            <div className="links-2">
              <div className="div-wrapper">
                <div className="text-wrapper-24">Inicio</div>
              </div>
              <div className="frame-8">
                <div className="text-wrapper-23">Negocio</div>
                <img
                  className="polygon-2"
                  alt="Polygon"
                  src="../static/img/polygon-1.svg"
                />
              </div>
              <div className="frame-9">
                <div className="text-wrapper-25">Crear Reparación</div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="login">
              <img
                className="charm-search"
                alt="Charm search"
                src="../static/img/charm-search.svg"
              />
              <div className="text-wrapper-26">Buscar</div>
            </div>
            <div className="ph-gear-fill">
              <div className="overlap-group-2">
                <img
                  className="vector-2"
                  alt="Vector"
                  src="../static/img/vector.svg"
                />
                <div className="ellipse-8" />
              </div>
            </div>
            <img
              className="ph-gear-fill"
              alt="Ph gear fill"
              src="../static/img/ph-gear-fill.svg"
            />
            <img
              className="img-2"
              alt="Profile"
              src="../static/img/profile.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
