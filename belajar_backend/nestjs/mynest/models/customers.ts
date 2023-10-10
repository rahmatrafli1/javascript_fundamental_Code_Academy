import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { users } from './users';

export interface customersAttributes {
  id?: number;
  first_name?: string;
  last_name?: string;
  user_id?: number;
  createdat?: Date;
  updatedat?: Date;
}

@Table({ tableName: 'customers', schema: 'public', timestamps: false })
export class customers
  extends Model<customersAttributes, customersAttributes>
  implements customersAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('customers_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  first_name?: string;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  last_name?: string;

  @ForeignKey(() => users)
  @Column({ allowNull: true, type: DataType.INTEGER })
  user_id?: number;

  @Column({
    allowNull: true,
    type: DataType.DATE(6),
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  })
  createdat?: Date;

  @Column({
    allowNull: true,
    type: DataType.DATE(6),
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  })
  updatedat?: Date;

  @BelongsTo(() => users)
  user?: users;
}
