function predictDisease(symptoms) {
    let score = 0;

    if (symptoms.fever) score++;
    if (symptoms.vomiting) score++;
    if (symptoms.diarrhea) score++;
    if (symptoms.watery_stool) score++;
    if (symptoms.water_quality === "bad") score += 2;

    if (score >= 4) return "High Risk";
    else if (score >= 2) return "Medium Risk";
    else return "Low Risk";
}
