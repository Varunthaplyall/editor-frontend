const LanguageSelector = ({ languageId, setLanguageId }) => (
  <select value={languageId} onChange={(e) => setLanguageId(Number(e.target.value))}>
    <option value={71}>Python</option>
    <option value={63}>JavaScript</option>
    <option value={54}>C++</option>
  </select>
);

export default LanguageSelector;
