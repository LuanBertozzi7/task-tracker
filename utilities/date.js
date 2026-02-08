// Retorna: "HH:MM DD/MM/AAAA"
export function formatDateTask(date = new Date()) {
  const d = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(d.getTime())) throw new Error('Data inválida');

  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const MM = String(d.getMonth() + 1).padStart(2, '0');
  const yyyy = String(d.getFullYear());

  return `${hh}:${mm} ${dd}/${MM}/${yyyy}`;
}
