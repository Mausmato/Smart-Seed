export interface PredictionData {
  predicted_class: string;
  class_probabilities: { [key: string]: number };
}