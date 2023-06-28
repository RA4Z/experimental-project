export default function CalculoIdadeUsuario(dataNascimento:string) {
    const today: Date = new Date();
    const data: string = dataNascimento;
    const partes: string[] = data.split('/'); // Dividir a data em partes usando '/'
    const dia: number = parseInt(partes[0]);
    const mes: number = parseInt(partes[1]);
    const ano: number = parseInt(partes[2]);
    const dataConvertida: Date = new Date(ano, mes - 1, dia); // Converter para objeto Date
    const milissegundosPorAno: number = 365.25 * 24 * 60 * 60 * 1000; // Número médio de milissegundos em um ano
    const diferencaEmMilissegundos: number = today.getTime() - dataConvertida.getTime();
    const diferencaEmAnos: number = diferencaEmMilissegundos / milissegundosPorAno;
    const idadeAtualUsuario: number = Math.floor(diferencaEmAnos); // Arredondar para baixo
    return idadeAtualUsuario
}