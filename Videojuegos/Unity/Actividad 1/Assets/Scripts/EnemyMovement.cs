using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyMovement : MonoBehaviour
{
    [SerializeField] private Vector3 move;

    [SerializeField] private Vector3 start;

    [SerializeField] private float amplitude;

    [SerializeField] private float delta;

    private Vector3 pos;

    private float angle = 0.0f;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        pos = start;
        pos.x  = pos.x + Mathf.Cos(angle) * amplitude;
        transform.position = pos;
        angle += delta;
    }

    private void OnTriggerEnter2D(Collider2D col)
    {
        // move = -move;
    }
}
