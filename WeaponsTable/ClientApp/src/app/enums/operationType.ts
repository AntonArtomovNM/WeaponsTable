export enum OperationType {
    Add = 0,
    Update = 1,
    Delete = 2,
}

export function getOperationTypeDisplayName(value: OperationType) {
    switch (value) {
        case OperationType.Add: {
          return 'Додати';
        }
        case OperationType.Update: {
          return 'Змінити';
        }
        case OperationType.Delete: {
          return 'Видалити';
        }
        default: {
          return 'INVALID_VALUE';
        }
    }
}