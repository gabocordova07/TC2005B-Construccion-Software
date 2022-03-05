//Script to make the player move and win or lose points
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    [SerializeField] float speed = 20;
    [SerializeField] private ScoreManager scoreManager;

    Vector3 move;

    void Update()
    {
        // Read the input from keyboard
        move.y = Input.GetAxis("Vertical");

        // Apply the new data to the object transform
        transform.Translate(move * speed * Time.deltaTime);
    }
    void OnTriggerEnter2D(Collider2D col)
    {
        // Manage player points
        if(col.gameObject.tag=="Enemy")
        {
            scoreManager.removePoint();
        }
        else if(col.gameObject.tag=="FinishLine")
        {
            scoreManager.addFivePoints();
        }
    }
}