'use strict';

var TAG_DICT = {
    '(300A,00B0)': {'tag': '(300A,00B0)', 'vr': 'SQ', 'vm': '1', 'name': 'BeamSequence'},
    '(300A,00C0)': {'tag': '(300A,00C0)', 'vr': 'IS', 'vm': '1', 'name': 'BeamNumber'},
    '(300A,00C6)': {'tag': '(300A,00C6)', 'vr': 'CS', 'vm': '1', 'name': 'RadiationType'},
    '(300A,00CE)': {'tag': '(300A,00CE)', 'vr': 'CS', 'vm': '1', 'name': 'TreatmentDeliveryType'},
    '(300A,0084)': {'tag': '(300A,0084)', 'vr': 'DS', 'vm': '1', 'name': 'BeamDose'},
    '(300A,00C2)': {'tag': '(300A,00C2)', 'vr': 'LO', 'vm': '1', 'name': 'BeamName'},
    '(300A,00B2)': {'tag': '(300A,00B2)', 'vr': 'SH', 'vm': '1', 'name': 'TreatmentMachineName'},
    '(300A,00C4)': {'tag': '(300A,00C4)', 'vr': 'CS', 'vm': '1', 'name': 'BeamType'},
    '(0018,5100)': {'tag': '(0018,5100)', 'vr': 'CS', 'vm': '1', 'name': 'PatientPosition'},
    '(300A,0114)': {'tag': '(300A,0114)', 'vr': 'DS', 'vm': '1', 'name': 'NominalBeamEnergy'},
    '(300A,0115)': {'tag': '(300A,0115)', 'vr': 'DS', 'vm': '1', 'name': 'DoseRateSet'},
    '(300A,0086)': {'tag': '(300A,0086)', 'vr': 'DS', 'vm': '1', 'name': 'BeamMeterset'},
    '(300A,0130)': {'tag': '(300A,0130)', 'vr': 'DS', 'vm': '1', 'name': 'SourceToSurfaceDistance'},
    '(300A,011E)': {'tag': '(300A,011E)', 'vr': 'DS', 'vm': '1', 'name': 'GantryAngle'}, // first, last만
    '(300A,011F)': {'tag': '(300A,011F)', 'vr': 'CS', 'vm': '1', 'name': 'GantryRotationDirection'},
    '(300A,0120)': {'tag': '(300A,0120)', 'vr': 'DS', 'vm': '1', 'name': 'BeamLimitingDeviceAngle'},
    '(300A,011C)': {'tag': '(300A,011C)', 'vr': 'DS', 'vm': '2-2n', 'name': 'LeafJawPositions'},
    '(300A,00B8)': {'tag': '(300A,00B8)', 'vr': 'CS', 'vm': '1', 'name': 'RTBeamLimitingDeviceType'},
    '(300A,00D5)': {'tag': '(300A,00D5)', 'vr': 'IS', 'vm': '1', 'name': 'WedgeAngle'},
    '(300A,00D4)': {'tag': '(300A,00D4)', 'vr': 'SH', 'vm': '1', 'name': 'WedgeID'},
    '(300A,0118)': {'tag': '(300A,0118)', 'vr': 'CS', 'vm': '1', 'name': 'WedgePosition'},
    '(300A,0108)': {'tag': '(300A,0108)', 'vr': 'SH', 'vm': '1', 'name': 'ApplicatorID'},
    '(300A,0107)': {'tag': '(300A,0107)', 'vr': 'SQ', 'vm': '1', 'name': 'ApplicatorSequence'},
    '(300A,0122)': {'tag': '(300A,0122)', 'vr': 'DS', 'vm': '1', 'name': 'PatientSupportAngle'},
    '(300A,00C6)': {'tag': '(300A,00C6)', 'vr': 'CS', 'vm': '1', 'name': 'RadiationType'},
    '(300A,0110)': {'tag': '(300A,0110)', 'vr': 'IS', 'vm': '1', 'name': 'NumberOfControlPoints'},
    '(300A,0111)': {'tag': '(300A,0111)', 'vr': 'SQ', 'vm': '1', 'name': 'ControlPointSequence'},
    '(300A,00ED)': {'tag': '(300A,00ED)', 'vr': 'IS', 'vm': '1', 'name': 'NumberOfBoli'},
    '(0074,1027)': {'tag': '(0074,1027)', 'vr': 'FD', 'vm': '1', 'name': 'TableTopLongitudinalAdjustedPosition'},
    '(0074,1026)': {'tag': '(0074,1026)', 'vr': 'FD', 'vm': '1', 'name': 'TableTopVerticalAdjustedPosition'},
    '(0074,1028)': {'tag': '(0074,1028)', 'vr': 'FD', 'vm': '1', 'name': 'TableTopLateralAdjustedPosition'},
    '(300A,00E0)': {'tag': '(300A,00E0)', 'vr': 'IS', 'vm': '1', 'name': 'NumberOfCompensators'},
    '(300A,00EC)': {'tag': '(300A,00EC)', 'vr': 'DS', 'vm': '1-n', 'name': 'CompensatorThicknessData'},
    '(300A,00E3)': {'tag': '(300A,00E3)', 'vr': 'SQ', 'vm': '1', 'name': 'CompensatorSequence'},
    '(300C,0004)': {'tag': '(300C,0004)', 'vr': 'SQ', 'vm': '1', 'name': 'ReferencedBeamSequence'},
    '(300A,00F0)': {'tag': '(300A,00F0)', 'vr': 'IS', 'vm': '1', 'name': 'NumberOfBlocks'},
    '(300A,00D1)': {'tag': '(300A,00D1)', 'vr': 'SQ', 'vm': '1', 'name': 'WedgeSequence'},

}

// module.exports = { TAG_DICT };