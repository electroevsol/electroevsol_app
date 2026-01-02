const COST_PER_UNIT = 8;
const GENERATION_PER_KW_DAILY = 4;
const COST_PER_KW_INSTALLATION = 55000;
const CO2_PER_UNIT = 0.82;

export const calculateSolarPotential = async (req, res) => {
    try {
        const { monthlyBill } = req.body;

        if (!monthlyBill) {
            return res.status(400).json({
                success: false,
                message: 'Monthly Bill required',
            });
        }

        const monthlyUnits = monthlyBill / COST_PER_UNIT;
        const dailyUnits = monthlyUnits / 30;

        let systemSize = dailyUnits / GENERATION_PER_KW_DAILY;
        systemSize = Math.round(systemSize * 10) / 10;

        const annualGeneration = systemSize * GENERATION_PER_KW_DAILY * 365;
        const annualSavings = annualGeneration * COST_PER_UNIT;
        const totalSystemCost = systemSize * COST_PER_KW_INSTALLATION;

        let paybackPeriod = totalSystemCost / annualSavings;
        paybackPeriod = Math.round(paybackPeriod * 10) / 10;

        let co2Reduction = (annualGeneration * CO2_PER_UNIT) / 1000;
        co2Reduction = Math.round(co2Reduction * 100) / 100;

        return res.status(200).json({
            success: true,
            data: {
                size: systemSize,
                savings: annualSavings.toLocaleString('en-IN'),
                payback: paybackPeriod,
                co2: co2Reduction,
            },
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ success: false, error: error.message });
        } else {
            return res.status(500).json({ success: false, error: 'Calculation failed' });
        }
    }
};
