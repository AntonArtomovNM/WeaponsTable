import { getOperationTypeDisplayName, OperationType } from './../enums/operationType';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'operationTypeName'
})
export class OperationTypeNamePipe implements PipeTransform {

  transform(value: OperationType, ...args: unknown[]): unknown {
    return getOperationTypeDisplayName(value);
  }

}
