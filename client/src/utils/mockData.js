
const mockTrades = [
  { id: 1, fecha: "1/12/2026", instrumento: "MNQ", setup: "continuacion", resultado: "win" },
  { id: 2, fecha: "2/12/2026", instrumento: "MES", setup: "reversal", resultado: "loss" },
  { id: 3, fecha: "2/12/2026", instrumento: "MNQ", setup: "breakout", resultado: "win" },
  { id: 4, fecha: "3/12/2026", instrumento: "MGC", setup: "continuacion", resultado: "win" },
  { id: 5, fecha: "3/12/2026", instrumento: "MNQ", setup: "pullback", resultado: "loss" },
  { id: 6, fecha: "4/12/2026", instrumento: "MES", setup: "breakout", resultado: "win" },
  { id: 7, fecha: "4/12/2026", instrumento: "MNQ", setup: "reversal", resultado: "win" },
  { id: 8, fecha: "5/12/2026", instrumento: "MCL", setup: "continuacion", resultado: "loss" },
  { id: 9, fecha: "5/12/2026", instrumento: "MNQ", setup: "pullback", resultado: "win" },
  { id: 10, fecha: "8/12/2026", instrumento: "MES", setup: "continuacion", resultado: "win" },
  { id: 11, fecha: "8/12/2026", instrumento: "MNQ", setup: "breakout", resultado: "loss" },
  { id: 12, fecha: "9/12/2026", instrumento: "MGC", setup: "reversal", resultado: "win" },
  { id: 13, fecha: "9/12/2026", instrumento: "MNQ", setup: "continuacion", resultado: "loss" },
  { id: 14, fecha: "10/12/2026", instrumento: "MES", setup: "pullback", resultado: "win" },
  { id: 15, fecha: "10/12/2026", instrumento: "MNQ", setup: "breakout", resultado: "win" },
  { id: 16, fecha: "11/12/2026", instrumento: "MCL", setup: "reversal", resultado: "loss" },
  { id: 17, fecha: "11/12/2026", instrumento: "MNQ", setup: "pullback", resultado: "win" },
  { id: 18, fecha: "12/12/2026", instrumento: "MES", setup: "continuacion", resultado: "win" },
  { id: 19, fecha: "12/12/2026", instrumento: "MGC", setup: "breakout", resultado: "loss" },
  { id: 20, fecha: "15/12/2026", instrumento: "MNQ", setup: "continuacion", resultado: "win" },
];

const mockAccount = {
  id: "TRD-00142",
  nombre: "Noemi Guadalupe Bonilla Rivas",
  iniciales: "NG",
  plataforma: "Ninjatrader",
  balanceInicial: 50000,
  balanceActual: 52340,
  pnlNeto: 2340,
  drawdownMax: -1120,
  winrate: 70,
  totalTrades: 20,
  wins: 14,
  losses: 6,
  fechaInicio: "1/01/2025",
 
};

const mockPlatforms = [
  {
    id: "PLT-001",
    nombre: "Tradovate",
    tipo: "Web / Desktop",
    mercado: "Futuros CME",
    comision: 0.59,
    datosRealTime: true,
    estado: "activa",
  },
  {
    id: "PLT-002",
    nombre: "NinjaTrader",
    tipo: "Desktop",
    mercado: "Futuros / Forex",
    comision: 0.53,
    datosRealTime: true,
    estado: "inactiva",
  },
  {
    id: "PLT-003",
    nombre: "TradingView",
    tipo: "Web",
    mercado: "Multi-mercado",
    comision: null,
    datosRealTime: true,
    estado: "activa",
  },
];

const mockFundingAccounts = [
  {
    id: "FUND-001",
    firma: "TopstepTrader",
    tamano: 50000,
    profitTarget: 3000,
    maxDrawdown: 2000,
    dailyLossLimit: 1000,
    splitTrader: 80,
    plataformaId: "PLT-001",
    estado: "funded",
  },
  {
    id: "FUND-002",
    firma: "Apex Trader Funding",
    tamano: 100000,
    profitTarget: 6000,
    maxDrawdown: 3000,
    dailyLossLimit: 1500,
    splitTrader: 90,
    plataformaId: "PLT-002",
    estado: "evaluacion",
  },
  {
    id: "FUND-003",
    firma: "FTMO",
    tamano: 25000,
    profitTarget: 2500,
    maxDrawdown: 1250,
    dailyLossLimit: 500,
    splitTrader: 80,
    plataformaId: "PLT-003",
    estado: "fallida",
  },
];

export default{mockTrades, mockAccount, mockPlatforms, mockFundingAccounts} 