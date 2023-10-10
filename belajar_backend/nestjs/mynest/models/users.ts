import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  HasOne,
  HasMany,
} from 'sequelize-typescript';
import { customers } from './customers';
import { orders } from './orders';

export interface usersAttributes {
  id?: number;
  username?: string;
  password?: string;
  createdat?: Date;
  updatedat?: Date;
}

@Table({ tableName: 'users', schema: 'public', timestamps: false })
export class users
  extends Model<usersAttributes, usersAttributes>
  implements usersAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('users_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  username?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  password?: string;

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

  @HasOne(() => customers, { sourceKey: 'id' })
  customer?: customers;

  @HasMany(() => orders, { sourceKey: 'id' })
  orders?: orders[];
}
