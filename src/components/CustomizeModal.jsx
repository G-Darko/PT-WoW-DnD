import React, { useState, useEffect } from "react";
import CloseSVG from "./CloseSVG";

const CustomizeModal = ({
  isOpen,
  onClose,
  onSave,
  currentLogoUrl,
  currentOverviewUrl,
  currentNavLinks,
}) => {
  const [logoUrl, setLogoUrl] = useState(currentLogoUrl || "");
  const [overviewUrl, setOverviewUrl] = useState(currentOverviewUrl || "");
  const [tempNavLinks, setTempNavLinks] = useState(currentNavLinks || []);
  const [draggedItem, setDraggedItem] = useState(null);

  useEffect(() => {
    setLogoUrl(currentLogoUrl || "");
    setOverviewUrl(currentOverviewUrl || "");
    setTempNavLinks(currentNavLinks || []);
  }, [currentLogoUrl, currentOverviewUrl, currentNavLinks]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const handleDragStart = (e, index) => {
    setDraggedItem(tempNavLinks[index]);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const startIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);

    if (startIndex !== targetIndex) {
      const newOrder = reorder(tempNavLinks, startIndex, targetIndex);
      setTempNavLinks(newOrder);
    }
    setDraggedItem(null);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(
      {
        logo: logoUrl.trim(),
        overview: overviewUrl.trim() || "/overview.png",
      },
      tempNavLinks
    );
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
      onClick={onClose}
    >
      <div
        className="relative w-full md:w-[50%] h-[90%] overflow-y-auto content-center p-8 rounded-xl shadow-2xl bg-[var(--bg)] text-[var(--text)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <CloseSVG />
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center">
          Personalizar Logo
        </h2>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-6 border-b pb-4">
            <label htmlFor="logoUrl" className="block text-xl font-bold mb-2">
              Logo Navbar URL
            </label>
            <input
              type="url"
              id="logoUrl"
              name="logoUrl"
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
              className="w-full h-[40px] border-1 rounded-lg p-4 mb-2"
              placeholder="https://ejemplo.com/mi-logo.png"
            />
            {logoUrl && logoUrl !== "/overview.png" && (
              <img
                src={logoUrl}
                alt="Logo Previsualización"
                className="max-h-12 object-contain mx-auto border p-1"
              />
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="overviewUrl"
              className="block text-xl font-bold mb-2"
            >
              Imagen Hero URL
            </label>
            <input
              type="url"
              id="overviewUrl"
              name="overviewUrl"
              value={overviewUrl === "/overview.png" ? "" : overviewUrl}
              onChange={(e) => setOverviewUrl(e.target.value)}
              className="w-full h-[40px] border-1 rounded-lg p-4 mb-2"
              placeholder="https://ejemplo.com/imagen-overview.jpg"
            />
            {overviewUrl && overviewUrl !== "/overview.png" && (
              <img
                src={overviewUrl}
                alt="Overview Previsualización"
                className="max-w-full max-h-40 object-contain mx-auto border p-1"
              />
            )}
          </div>

          <div className="mb-6 border-b pb-4">
            <h3 className="block text-xl font-bold mb-2">
              Reordenar Enlaces de Navbar
            </h3>
            <ul className="space-y-2 p-2 border rounded-lg bg-gray-700">
              {tempNavLinks.map((link, index) => (
                <li
                  key={link.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragEnter={handleDragEnter}
                  onDragEnd={handleDragEnd}
                  className={`p-3 bg-gray-800 text-white rounded-md cursor-move flex justify-between items-center transition-all 
                              ${
                                draggedItem && draggedItem.id === link.id
                                  ? "opacity-50 border-2 border-blz-logo"
                                  : ""
                              }`}
                  style={{ userSelect: "none" }}
                >
                  <span>{link.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="submit"
            className="w-full py-3 mb-4 text-white font-bold rounded-lg transition-colors duration-300 bg-[var(--blz-logo)] hover:bg-[var(--blz-logo-hover)] cursor-pointer"
          >
            Guardar Personalizaciones
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomizeModal;
