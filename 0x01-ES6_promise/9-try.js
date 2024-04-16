export default function guardrail(mathFunction) {
  const all = [];
  try {
    const result = mathFunction();
    all.push(result);
  } catch (err) {
    all.push(`Error: ${err.message}`);
  } finally {
    all.push('Guardrail was processed');
  }
  return all;
}
