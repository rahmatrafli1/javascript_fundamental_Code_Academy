import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { users } from './users';
import { order_detail } from './order_detail';

export interface ordersAttributes {
  id?: number;
  user_id?: number;
  total_product?: number;
  total_price?: string;
  createdat?: Date;
  updatedat?: Date;
}

@Table({ tableName: 'orders', schema: 'public', timestamps: false })
export class orders
  extends Model<ordersAttributes, ordersAttributes>
  implements ordersAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('orders_id_seq'::regclass)"),
  })
  id?: number;

  @ForeignKey(() => users)
  @Column({ allowNull: true, type: DataType.INTEGER })
  user_id?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  total_product?: number;

  @Column({ allowNull: true, type: DataType.DECIMAL })
  total_price?: string;

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

  @HasMany(() => order_detail, { sourceKey: 'id' })
  order_details?: order_detail[];
}
