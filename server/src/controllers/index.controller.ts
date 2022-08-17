import { Request, Response } from 'express'
import {QueryResult} from 'pg'

import { pool } from '../database'

export  const getBids = async (req: Request, res: Response): Promise<Response> => {
  try {
    const responce: QueryResult = await pool.query('SELECT * FROM bids');
    // console.log(responce.rows)
     return res.status(200).json(responce.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json('Server error');
  }
}
 
export  const getBindById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)

      const response: QueryResult  = await pool.query('SELECT * FROM bids WHERE id = $1', [id]);
      // console.log(responce.rows)
       return res.status(200).json(response.rows);

  } catch (error) {
    console.log(error);
    return res.status(500).json('Server error');
  }
}

export  const createBind = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { sum, course, currency, email } = req.body;
      const response: QueryResult = await pool.query('INSERT INTO bids (sum, course, currency, email) VALUES ($1, $2, $3, $4)', [sum, course, currency, email ]);
      // console.log(responce.rows)
       return res.status(200).json({
        message: 'Bind created successfully',
        body: {
          bind: {
            sum, 
            course,
            currency,
            email
          }
        }
       });
  } catch (error) {
    console.log(error);
    return res.status(500).json('Server error');
  }
}

export  const updateBindById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const { sum, course, currency, email } = req.body;
    await pool.query('UPDATE bids SET sum = $1, course = $2, currency = $3, email = $4 WHERE id = $5', [sum, course, currency, email, id]);
     return res.json(`Bind ${id} updated successfully`);
  } catch (error) {
    console.log(error);
    return res.status(500).json('Server error');
  }
}

export  const deleteBindById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
       await pool.query('DELETE FROM bids WHERE id = $1', [id]);
       return res.json(`Bind ${id} deleted successfully`);
    
  } catch (error) {
    console.log(error);
    return res.status(500).json('Server error');
  }
}
